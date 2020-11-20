import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2fa;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  display: flex;

  img {
    border-top-left-radius: 6px;
    width: 20rem;
  }
`;

export const MenuContainer = styled.div`
  margin-left: 8rem;

  ul {
    display: flex;
    list-style: none;
    font-weight: bold;

    a {
      text-decoration: none;
      color: #333;

      li {
        padding: 2rem 1rem 1rem;

        & + li {
          margin-left: 1rem;
        }
      }

      &:hover {
        background: #00bfa6;
        border-radius: 0 0 18px 18px;
        color: #fff;
      }
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: -10rem;

  div {
    margin-left: 4rem;
    margin-top: auto;
    max-width: 430px;

    h1 {
      color: #264653;
      font-size: 52px;
    }

    span {
      font-size: 40px;
      color: #006f60;
      margin-top: 1.4rem;
    }

    p {
      margin-top: 3.7rem;
      text-align: justify;
    }
  }

  img {
    width: 38rem;
    margin-left: 0;
  }
`;

export const Section = styled.section`
  margin-top: 130px;
  background: #264653;
  padding: 6rem 4rem 0;

  header {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* padding: 6rem 4rem; */

      span {
        max-width: 430px;
        font-size: 42px;
        color: #f0f0f0;
      }

      p {
        max-width: 600px;
        line-height: 40px;
        font-size: 24px;
        color: #dddddd;
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3rem;
`;

export const Card = styled.div`
  position: relative;
  max-width: 280px;

  & + div {
    margin-top: 10rem;
    margin-bottom: -4rem;
  }

  &:last-child {
    margin-top: 5rem;
  }

  span {
    font-size: 100px;
    color: rgba(133, 249, 233, 0.09);
    margin-left: -2.9rem;
  }

  strong {
    font-size: 20px;
    color: #ccc;
    /* font-weight: normal; */
    position: absolute;
    left: 0;
    top: 4.6rem;
  }

  p {
    max-width: 280px;
    color: #dedede;
    text-align: justify;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#264653, #fff);
    margin-top: 2rem;
    border-radius: 0 0 6px 6px;

    img {
      width: 260px;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  background: #f2f2fa;
  border-radius: 0 0 6px 6px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 20rem;
    }

    p {
      max-width: 600px;
      margin-right: 10rem;
      line-height: 30px;
      font-size: 24px;
    }
  }

  div {
    display: flex;

    justify-content: flex-end;
    padding: 2rem 4rem;

    a {
      text-decoration: none;

      & + a {
        margin-left: 2rem;
      }
    }
  }
`;
