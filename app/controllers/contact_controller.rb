class ContactController < ApplicationController
    def index
        render "index"
    end

    def store
        @userQuery = UserQuery.new(contact_params)

        if @userQuery.save
            render json: { query: @userQuery }, status: :created
        else
            render json: { errors: @userQuery.errors }, status: :error
        end
    end

    private

    def contact_params
        params.permit(:subject, :content, :email)
    end


end
