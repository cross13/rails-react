class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :image
      t.string :name
      t.text :content
      t.string :link

      t.timestamps
    end
  end
end
