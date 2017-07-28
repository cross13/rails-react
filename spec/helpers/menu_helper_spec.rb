require 'rails_helper'

RSpec.describe MenuHelper, type: :helper do
    describe "Navegation menu items" do
        it "should send all the navegation items" do
            @nav = helper.get_nav_menu()
            expect(@nav).to include('meet_the_team')
            expect(@nav).to include('contact')
        end
    end
end
