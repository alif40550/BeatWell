package com.example.beatwell.data.pref

import android.content.Context
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.booleanPreferencesKey
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.core.edit
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

val Context.dataStore: DataStore<Preferences> by preferencesDataStore(name = "session")

class UserPreference private constructor(private val dataStore: DataStore<Preferences>){

    suspend fun saveSession(user: UserModel){
        dataStore.edit { preferences->
            preferences[USER_ID_KEY] = user.userId
            preferences[EMAIL_KEY] = user.email
            preferences[NAME_KEY] = user.name
            preferences[TOKEN_KEY] = user.token
            preferences[IS_LOGIN_KEY] = true
        }
    }

    fun getSession(): Flow<UserModel>{
        return dataStore.data.map { preferences ->
            UserModel(
                preferences[USER_ID_KEY] ?:"",
                preferences[EMAIL_KEY] ?:"",
                preferences[NAME_KEY] ?:"",
                preferences[TOKEN_KEY] ?:"",
                preferences[IS_LOGIN_KEY] ?:false
            )
        }
    }

    fun getDailyReminder(): Flow<Boolean> {
        return dataStore.data.map { preferences ->
            preferences[DAILY_REMINDER_KEY] ?: false
        }
    }

    suspend fun setDailyReminder(dailyReminder: Boolean) {
        dataStore.edit { preferences ->
            preferences[DAILY_REMINDER_KEY] = dailyReminder
        }
    }

    suspend fun logout(){
        dataStore.edit { preferences ->
            preferences.clear()
        }
    }

    companion object {
        @Volatile
        private var INSTANCE : UserPreference? = null

        private val USER_ID_KEY = stringPreferencesKey("userId")
        private val NAME_KEY = stringPreferencesKey("name")
        private val EMAIL_KEY = stringPreferencesKey("email")
        private val TOKEN_KEY= stringPreferencesKey("token")
        private val IS_LOGIN_KEY = booleanPreferencesKey("isLogin")
        private val DAILY_REMINDER_KEY = booleanPreferencesKey("dailyReminder")

        fun getInstance(dataStore: DataStore<Preferences>): UserPreference {
            return INSTANCE ?: synchronized(this) {
                val instance = UserPreference(dataStore)
                INSTANCE = instance
                instance
            }
        }
    }
}