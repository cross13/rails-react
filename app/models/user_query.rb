class UserQuery < ApplicationRecord
    validates :content, presence: true, length: { minimum: 5 }
    validates :subject, presence: true, length: { minimum: 3 }
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
end
