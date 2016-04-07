class AddColumnsDataToStates < ActiveRecord::Migration
  def change
    add_column :states, :providers_change, :integer
    add_column :states, :abrtn_providers, :integer
    add_column :states, :percent_counties_noclinic, :integer
    add_column :states, :percent_change_clinics, :integer	
  end
end
