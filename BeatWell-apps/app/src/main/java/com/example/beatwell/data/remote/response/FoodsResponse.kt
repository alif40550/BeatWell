package com.example.beatwell.data.remote.response

import com.google.gson.annotations.SerializedName

data class FoodsResponse(

	@field:SerializedName("data")
	val foodItem: List<FoodItem?>? = null,

	@field:SerializedName("message")
	val message: String? = null,

	@field:SerializedName("error")
	val error: Boolean? = null
)

data class FoodItem(

	@field:SerializedName("image")
	val image: String? = null,

	@field:SerializedName("ingredient")
	val ingredient: List<String?>? = null,

	@field:SerializedName("name")
	val name: String? = null,

	@field:SerializedName("recipe")
	val recipe: List<String?>? = null,

	@field:SerializedName("id")
	val id: Int? = null
)
