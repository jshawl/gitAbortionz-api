class CreateStates < ActiveRecord::Migration
  def change
    create_table :states do |t|
      t.integer :measure_id
      t.string :measure_name
      t.integer :guttmacher_id
      t.integer :datum
      t.string :state_id
      t.integer :datum_date
      t.integer :first_year
      t.integer :last_year
      t.text :footnotes
      t.string :sources
    end
  end
end
