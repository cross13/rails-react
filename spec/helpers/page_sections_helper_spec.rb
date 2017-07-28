require 'rails_helper'

RSpec.describe PageSectionsHelper, type: :helper do
    describe "Page Section information blocks" do
        it "should render the header correctly" do
            @nav = helper.page_header_title()
            expect(@nav).to include('G.DEVS')
        end

        it "should render the contact_title correctly" do
            @nav = helper.contact_title()
            expect(@nav).to include('Contact US')
        end
    end
end
