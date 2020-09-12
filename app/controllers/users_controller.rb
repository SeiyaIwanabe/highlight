class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      redirect_to user_path(current_user), notice: "プロフィールを更新しました！"
    else
      render :edit
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :image, :introduction)
  end
end
