class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :author
      t.string :title
      t.string :content
      t.date :created_at
      t.date :updated_at
    end
  end
end
