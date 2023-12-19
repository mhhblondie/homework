import bcrypt

password = b"secretp"

hashed = bcrypt.hashpw(password, bcrypt.gensalt())

username = request.form.get("username")
password = request.form.get("password")

if bcrypt.checkpwd(password, hashed):
   print ("good")
   redirect

else :
   print("try again")