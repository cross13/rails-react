require 'rails_helper'

RSpec.describe ContactController, type: :controller do
    describe "GET #index" do
        it "responds successfully with an HTTP 200 status code" do
            get :index
            expect(response).to be_success
            expect(response).to have_http_status(200)
        end

        it "renders the index template" do
            get :index
            expect(response).to render_template("index")
        end
    end

    describe "POST #store successfully" do
        it "should store a new query" do
            post :store, params: {
                    :content => "content",
                    :email => "j@doe.com",
                    :subject => 'The subject' }
            expect(response).to be_success
            expect(response.body).to include('The subjec')
        end
    end

    describe "POST #store Error with invalid mail" do
        it "should reject the new query" do
            post :store, params: {
                    :content => "content",
                    :email => "j",
                    :subject => 'The subject' }
            expect(response).to be_error
            expect(response.body).to include('email')
        end
    end

end
