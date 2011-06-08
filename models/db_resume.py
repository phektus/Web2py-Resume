# coding: utf8
try: 
    from gravatar import Gravatar 
except ImportError: 
    from gluon.contrib.gravatar import Gravatar 
    
from gluon.contrib.country import countries
    
MAX_ENTRIES = 15   
MAX_SKILLS = 5
SKILL_RATINGS = ['expert','advanced','beginner']
ENTRY_TYPES = ['work','education','personal']
DEFAULT_TEMPLATE = 'clean'
RESUME_TEMPLATES = ['clean']

# resume entries
db.define_table('entry',    
    Field('owner', 'reference auth_user', readable=False, writable=False, default=auth.user_id),
    Field('title', requires=IS_NOT_EMPTY(), label='Project/Organization'),      
    Field('position', requires=IS_NOT_EMPTY(), label='Position/Role/Degree'), 
    Field('link', default=None, label='Link/URL (optional)'),
    Field('description', 'text', requires=IS_NOT_EMPTY(), label='Detailed Description'),
    Field('type', requires=IS_IN_SET(ENTRY_TYPES, tuple(map(lambda a: a[0].upper()+a[1:len(a)], ENTRY_TYPES)))),
    Field('start', 'datetime', requires=IS_NOT_EMPTY(), label='Start Date'),
    Field('end', 'datetime', default=None, label='End Date (blank for Present)'),
    Field('created', 'datetime', readable=False, writable=False, default=request.now),
    Field('modified', 'datetime', readable=False, writable=False))

# user contact info
db.define_table('contactinfo',
    Field('owner', 'reference auth_user', readable=False, writable=False, default=auth.user_id),
    Field('email'),
    Field('address'),
    Field('home_phone'),
    Field('office_phone'),
    Field('cell_phone'),
    Field('skype'),
    Field('yahoo'),
    Field('gchat'),
    Field('aim'),
    Field('msn'))
    
# user profile
db.define_table('userprofile',
    Field('owner', 'reference auth_user', readable=False, writable=False, default=auth.user_id),
    Field('first_name', requires=IS_NOT_EMPTY()),
    Field('last_name', requires=IS_NOT_EMPTY()),
    Field('title', label='Title (eg. Developer, CPA, etc.)'),
    Field('country', requires=IS_IN_SET([country['code'] for country in countries],tuple([country['name'] for country in countries]))),
    Field('about', 'text', label='Tell something about yourself'),
    Field('summary', 'text', label='Summarize your professional experience'))   
    
# skills
db.define_table('skill',
    Field('owner', 'reference auth_user', readable=False, writable=False, default=auth.user_id),
    Field('name', requires=IS_NOT_EMPTY()),
    Field('duration', requires=IS_IN_SET(range(1, 10), tuple(range(1, 10))), label='Duration (in years)'),
    Field('description', 'text', requires=IS_NOT_EMPTY(), label='Description'),
    Field('rating', 'text', requires=IS_IN_SET(SKILL_RATINGS,tuple(map(lambda a: a[0].upper()+a[1:len(a)], SKILL_RATINGS))), default='expert'))
    
# user settings
db.define_table('usersettings',
    Field('owner', 'reference auth_user', readable=False, writable=False, default=auth.user_id),
    Field('resumeurl', unique=True),
    Field('activetemplate'))
