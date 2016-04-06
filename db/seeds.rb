
#state data seeds
states = JSON.parse(File.read("db/states.json"))

# story posts seed data
stories = JSON.parse(File.read("db/posts_data.json"))

comments = JSON.parse(File.read("db/comments.json"))

State.destroy_all
Post.destroy_all
Comment.destroy_all

Post.create!(stories)
State.create!(states)
Comment.create!(comments)

# State.create!(data)
#
# State.create!(rank)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
