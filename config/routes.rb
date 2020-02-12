Rails.application.routes.draw do
  root 'static#index'
  namespace :v1, defaults: { format: 'json'} do
    get 'things' => 'things#index'
  end

  get '*page' => 'static#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
end
