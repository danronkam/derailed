# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_07_180314) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.float "price", null: false
    t.float "shipping_price", null: false
    t.string "designer_brand", null: false
    t.string "title", null: false
    t.string "size", null: false
    t.string "category", null: false
    t.string "sub_category", null: false
    t.string "condition", null: false
    t.boolean "sold", default: false, null: false
    t.string "tags"
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_listings_on_category"
    t.index ["condition"], name: "index_listings_on_condition"
    t.index ["designer_brand"], name: "index_listings_on_designer_brand"
    t.index ["price"], name: "index_listings_on_price"
    t.index ["shipping_price"], name: "index_listings_on_shipping_price"
    t.index ["size"], name: "index_listings_on_size"
    t.index ["sold"], name: "index_listings_on_sold"
    t.index ["sub_category"], name: "index_listings_on_sub_category"
    t.index ["title"], name: "index_listings_on_title"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "top_size"
    t.integer "waist_size"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
