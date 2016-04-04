class AddColumnToStates < ActiveRecord::Migration
  def change
    add_column :states, :grade, :string
    add_column :states, :score, :integer
    add_column :states, :name, :string
  end
end
