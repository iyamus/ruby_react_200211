Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json'} do
    get 'things' => 'things#index'
  end
end
