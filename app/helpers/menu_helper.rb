module MenuHelper
    def get_nav_menu()
        {
            "meet_the_team" =>
            {
                'label' => 'Meet the team',
                'href'  => '/team'
            },
            "contact" => {
                'label' => 'Contact',
                'href'  => '/contact'
            }
        }
    end
end
