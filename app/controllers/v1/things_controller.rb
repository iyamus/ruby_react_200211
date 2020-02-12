class V1::ThingsController < ApplicationController
    def index
        render json: {:things =>[
            {
                :name => 'test',
                :guid => 'test_guid'
            }
        ]}.to_json
    end
end
