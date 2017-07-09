class HomeController < ApplicationController
    def index
        @services = Service.all()
        @headerTitle = 'G.DEVS'
        @primaryTitle = 'Freelance Devs'
        @servicesTitle = 'UI, Servers, FullStack'
        @description = 'The best solutions that you could ever think, server, custom software development, awesome Web UIs, we can do everything that you need.'
        @icon = 'fa fa-free-code-camp'
        @contactLabel = 'Contact US'
        render "landing"
    end
end
