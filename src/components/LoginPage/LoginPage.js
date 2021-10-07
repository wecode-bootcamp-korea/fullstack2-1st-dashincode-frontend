import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoginPage.scss';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      userPw: '',
      idChecked: false,
      pwChecked: false,
    };
  }

  goToMainPage = () => {
    this.props.history.push('/Main');
  };

  // 아이디 체크
  idInputCheck = event => {
    if (event.target.value.include('@')) {
      this.setState({ idChecked: true }, () => this.btnChangeColor());
    } else {
      this.setState({ idChecked: false }, () => this.btnChangeColor());
    }
  };

  //비밀번호 체크
  pwInputCheck = event => {
    this.setState({ userPw: event.target.value });
    if (event.target.value.length >= 8) {
      this.setState({ userName: event.target.value, pwChecked: true }, () =>
        this.btnChangeColor()
      );
    } else {
      this.setState({ pwChecked: false }, () => this.btnChangeColor());
    }
  };

  // btnChangeColor = () => {
  //   if (this.state.idChecked && this.state.pwChecked) {
  //     this.setState({ btnColor: '#ab4ba5' });
  //   } else {
  //     alert('이메일 계정을 입력해주세요');
  //   }
  // };

  // 버튼 클릭
  btnClick = () => {
    console.log('사용자 ID :', this.state.userName);
    console.log('사용자 Password : ', this.state.userPw);
  };
  render() {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <div className="login">
            <div className="loginRenewBox">
              <div className="loginTitleBox">
                <p className="loginTitle">로그인</p>
                <p className="underLoginTitle">
                  회원가입 하면 &nbsp;
                  <em className="rightUnderLoginTitle">
                    15000원 상당 쿠폰을 드립니다!
                  </em>
                </p>
              </div>
              <form className="loginForm">
                <div className="loginInput">
                  <input
                    className="userIdPwForm"
                    type="text"
                    placeholder="이메일 입력"
                    onChange={this.idInputCheck}
                  />
                </div>
                <div className="loginInput">
                  <input
                    className="userIdPwForm"
                    type="password"
                    placeholder="비밀번호 입력"
                    onChange={this.PwInputCheck}
                  />
                </div>
              </form>
              <div className="loginBtn">
                <Link onClick="/">로그인</Link>
              </div>
              <div className="underLoginBtn">
                <Link to="pages/Signup" className="underLoginBtnWords">
                  회원가입
                </Link>
                <em className="underLoginBtnBar"> | </em>
                <Link to="#" className="underLoginBtnWords">
                  아이디 찾기
                </Link>
                <em className="underLoginBtnBar"> | </em>
                <Link to="#" className="underLoginBtnWords">
                  비밀번호 찾기
                </Link>
              </div>
              <div className="easyLogin">
                <p className="easyLoginWord">간편 로그인</p>
                <div className="loginInToSocial">
                  <Link to="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=2XL8Yj37FAjmgpAJa5Yo&redirect_uri=https%3A%2F%2Fdshop%2Edietshin%2Ecom%2Fmember%2Fnaver%2Easp&state=naver">
                    <img
                      alt=""
                      src="https://dshop.dietshin.com/img/ico/ico_sns_naver_c.png"
                    />
                  </Link>
                  <Link to="https://kauth.kakao.com/oauth/authorize?response_type=code&amp;client_id=2d4ac180ad6ea3f67c6cfbe9d55448bc&amp;redirect_uri=https%3A%2F%2Fdshop%2Edietshin%2Ecom%2Fmember%2Fkakao%2Easp&amp;state=kakao">
                    <img
                      alt=""
                      src="https://dshop.dietshin.com/img/ico/ico_sns_kakao_c.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
