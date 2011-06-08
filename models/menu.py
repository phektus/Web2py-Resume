response.subtitle = "resumes made simple"

response.title = "CVStash: Resumes made simple"        

if auth.user_id:    
  response.meta.keyword = "%s %s resume, free resume, free cv" % (auth.user.first_name, auth.user.last_name)
else:    
  response.meta.keyword = "free resume, free cv, online resume, online portfolio"
  
response.menu = [		
	(T('Dashboard'), False, URL('default','manage')),	
	(T('My Resume'), False, URL('default', 'public')),
	(T('My Contact Info'), False, URL('default', 'contactinfo')),
]
