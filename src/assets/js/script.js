# Swaks is an smtp of CURL, install it first:
  curl http://www.jetmore.org/john/code/swaks/files/swaks-20130209.0/swaks -o swaks
  
  # Set the permissions for the script so you can run it
  chmod +x swaks
  
  # It's based on perl, so install perl
  sudo apt-get -y install perl
  
  # Now send!
  ./swaks --auth \
  	--server smtp.mailgun.org \
  	--au postmaster@whitbystudioswebdesign.com \
  	--ap 3kh9umujora5 \
  	--to bar@example.com \
  	--h-Subject: "Hello" \
  	--body 'Testing some Mailgun awesomness!'