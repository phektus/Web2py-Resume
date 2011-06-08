# coding: utf8
import os
from gluon.contrib.login_methods.rpx_account import RPXAccount
from gluon.contrib.login_methods.extended_login_form import ExtendedLoginForm

mydomain = 'www.mydomain.com'

# normal auth
auth = Auth(globals(),db)
auth.define_tables()

# verification mail
mail = Mail() 
mail.settings.server = 'gae'
mail.settings.sender = 'sender@server.com' 
mail.settings.tls = True
mail.settings.login = open(os.path.join(request.folder, 'private', 'gmail_account.txt'), 'r').read().strip()

auth.settings.mailer = mail 
auth.messages.verify_email = """
Thanks for registering! Please click on this link to verify your email:
http://www.cvstash.com/resume/default/user/verify_email/%(key)s 

We hope you will start updating your resume soon and find the career of your dreams.
- CVStash Team
"""
auth.settings.registration_requires_verification = True

# recaptcha
recaptcha_private_key = open(os.path.join(request.folder, 'private', 'recaptcha_private_key.txt'), 'r').read().strip()
recaptcha_public_key = open(os.path.join(request.folder, 'private', 'recaptcha_public_key.txt'), 'r').read().strip()    
recaptcha = Recaptcha(request, recaptcha_private_key, recaptcha_public_key)
auth.settings.register_captcha = recaptcha
auth.settings.retrieve_username_captcha = recaptcha
auth.settings.retrieve_password_captcha = recaptcha

mailhide_api_key = open(os.path.join(request.folder, 'private', 'mailhide_api_key.txt'), 'r').read().strip()  

# disabled auth actions
auth.settings.actions_disabled.append('profile') 

# define where to go after RPX login
if request.vars._next:
    url = "http://%s/%s/default/user/login?_next=%s" % (mydomain, request.application, request.vars._next)
else:
    url = "http://%s/%s/default/user/login" % (mydomain, request.application)

# we read a key from a file because we want to keep it private
janrain_api_key = open(os.path.join(request.folder, 'private', 'janrain_api_key.txt'), 'r').read().strip()  

rpxform = RPXAccount(request, 
    api_key=janrain_api_key,
    domain='yourdomain',
    url = url,
    language="en",
    embed=True
)    
