import dispatcher from '../../dispatcher'
import EVT from '../../enums/events'

<login>
  <img class="background" src='/img/login-background.jpg'/>
  <div class="login-box">
    <button class="twitter" onclick={ twitterLogin }>
      <img class="icon" src="img/twitter-icon.svg"/>
      login with Twitter
    </button>

    <button class="facebook" onclick={ facebookLogin }>
      <img class="icon" src="img/facebook-icon.svg"/>
      login with Facebook
    </button>
  </div>

  <script>
    this.twitterLogin = () => {
      dispatcher.trigger(EVT.LOGIN)
    }

    this.facebookLogin = () => {
      dispatcher.trigger(EVT.LOGIN)
    }
  </script>
</login>
