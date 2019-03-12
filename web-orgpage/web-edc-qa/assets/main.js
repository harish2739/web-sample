var map = {
        "abhay":"https://veeva.theorgwiki.com/employees/abhay_pimprikar/",
        "galina":"https://veeva.theorgwiki.com/employees/galina_galev/",
        "slava":"https://veeva.theorgwiki.com/employees/vyacheslav_fomin/",
        "harish":"https://veeva.theorgwiki.com/employees/harish_appannagari/",
        "pranathi":"https://veeva.theorgwiki.com/employees/pranathi_gorantla/",
        "stanley":"https://veeva.theorgwiki.com/employees/stanley_chen/",
        "shobha":"https://veeva.theorgwiki.com/employees/shobha_mohan/",
        "jackie":"https://veeva.theorgwiki.com/employees/jackie_kwong/"
}

function showOrgWiki(orgLink) {
    window.open(map[orgLink],'name','width=800,height=650')
}

function showWiki(wikiLink) {
    window.open(wikiLink,'name','width=800,height=750')
}