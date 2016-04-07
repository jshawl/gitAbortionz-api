# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160407145600) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "posts", force: :cascade do |t|
    t.string "author"
    t.string "title"
    t.string "content"
    t.date   "created_at"
    t.date   "updated_at"
  end

  create_table "states", force: :cascade do |t|
    t.integer "measure_id"
    t.string  "measure_name"
    t.integer "guttmacher_id"
    t.integer "datum"
    t.string  "state_id"
    t.integer "datum_date"
    t.integer "first_year"
    t.integer "last_year"
    t.text    "footnotes"
    t.string  "sources"
    t.string  "grade"
    t.integer "score"
    t.string  "name"
    t.string  "roe_repeal"
    t.string  "state_restrict"
    t.string  "save_self"
    t.string  "state_ban"
    t.string  "counseling"
    t.string  "waiting_period"
    t.string  "two_trips"
    t.integer "providers_change"
    t.integer "abrtn_providers"
    t.integer "percent_counties_noclinic"
    t.integer "percent_change_clinics"
  end

end
