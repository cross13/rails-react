require "rails_helper"

RSpec.describe UserQuery, :type => :model do

    it "should require a Subject" do
      @userQ = UserQuery.create(:subject => '', :content => 'Some content', :email => 'jhon@gmail.com')
      @userQ.valid?
      expect(@userQ.errors).to have_key(:subject)
    end

    it "should require a Valid email" do
      @userQ = UserQuery.create(:subject => 'Subject', :content => 'Some content', :email => 'jhngmail.com')
      @userQ.valid?
      expect(@userQ.errors).to have_key(:email)
    end

    it "should require a content" do
      @userQ = UserQuery.create(:subject => 'Subject', :content => '', :email => 'jhon@gmail.com')
      @userQ.valid?
      expect(@userQ.errors).to have_key(:content)
    end

end
