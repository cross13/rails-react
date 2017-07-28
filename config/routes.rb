Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Home
  get 'home/' => 'home#index'

  # Team
  get 'team/' => 'contact#index'

  # Contact
  get 'contact/' => 'contact#index'

  # Store Contact
  post 'contact/' => 'contact#store'

  root 'home#index'

end
