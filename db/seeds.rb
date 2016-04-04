policies = JSON.parse(File.read("db/states_policies.json"))
data = JSON.parse(File.read("db/states_data.json"))
stories = JSON.parse(File.read("db/posts_data.json"))
rank = JSON.parse(File.read("db/states_ranking.json"))

State.destroy_all

Post.destroy_all

Post.create!(stories)

State.create!(policies)

State.create!(data)

State.create!(rank)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
