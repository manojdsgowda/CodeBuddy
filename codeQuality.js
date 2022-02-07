// level 2

async function getUsers() {
	  const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };
  
  let doc = await Promise.all(getUser(), getProfile(), getPosts().then((value1, value2,value3)==>{
	  userProfile.user=value1,userProfile.Profile=value2,userProfile.p=value3
  });

  return userProfile;
}
