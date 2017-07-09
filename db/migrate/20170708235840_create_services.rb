class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :title
      t.string :logo
      t.text :content

      t.timestamps
    end
  end
end
