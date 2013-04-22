class ContactsController < ApplicationController
  def index
  	
  end
  def create
  	if request.post?
  		 ContactMailer.contact_email(params[:contact]).deliver
  		 redirect_to :back
  	end
  end
end
