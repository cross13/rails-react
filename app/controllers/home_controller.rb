class HomeController < ApplicationController
    def index
        @services = contacts_to_diplay
        @primaryTitle = 'Freelance Devs'
        @servicesTitle = 'UI, Servers, FullStack'
        @description = 'The best solutions that you could ever think, server, custom software development, awesome Web UIs, we can do everything that you need.'
        @icon = 'fa fa-free-code-camp'

        render "landing"
    end

    private

    def contacts_to_diplay
        Service.all()
    end

end
