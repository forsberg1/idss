class ContactMailer < ActionMailer::Base
  default :from => "info@idss-design.se"
 
  def contact_email(user)
    @user = user
    @url  = "http://example.com/login"
    mail(:to => "info@idss-design.se", :subject => "kontakt : idss")
  end
end
