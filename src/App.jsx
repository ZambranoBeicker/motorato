import { createGlobalStyle } from "styled-components";
import Form from "./Form";

const GlobalStyle = createGlobalStyle`
      :root {
    --azuloscuro: #0D1B41;
    --azul: #1C377E;
    --verde: #48F2BE;
    --celeste: #E5F0FF;
    --plomo: #2D2D2C;
}

            * {
              font-family: "Red Hat Display", sans-serif;
            }

      *,
      :after,
      :before {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      body {
        font-size: 1rem !important;
            font-family: 'Montserrat', sans-serif;

        padding: 0;
        margin: 0;
        background: #fff;
        font-style: normal;
        overflow-x: hidden !important;
        overflow-y: scroll;
        -webkit-text-size-adjust: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1,
      h1 a,
      h2,
      h2 a,
      h3,
      h3 a,
      h4,
      h4 a,
      h5,
      h5 a,
      h6,
      h6 a {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        letter-spacing: 0;
      }

        a,
      abbr,
      acronym,
      address,
      applet,
      article,
      aside,
      audio,
      b,
      big,
      blockquote,
      body,
      canvas,
      caption,
      center,
      cite,
      code,
      dd,
      del,
      details,
      dfn,
      div,
      dl,
      dt,
      em,
      embed,
      fieldset,
      figcaption,
      figure,
      footer,
      form,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      header,
      hgroup,
      html,
      i,
      iframe,
      img,
      ins,
      kbd,
      label,
      legend,
      li,
      mark,
      menu,
      nav,
      object,
      ol,
      output,
      p,
      pre,
      q,
      ruby,
      s,
      samp,
      section,
      small,
      span,
      strike,
      strong,
      sub,
      summary,
      sup,
      table,
      tbody,
      td,
      tfoot,
      th,
      thead,
      time,
      tr,
      tt,
      u,
      ul,
      var,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
      }
      :focus {
        outline: 0;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:after,
      blockquote:before,
      q:after,
      q:before {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      input[type="search"]::-webkit-search-cancel-button,
      input[type="search"]::-webkit-search-decoration,
      input[type="search"]::-webkit-search-results-button,
      input[type="search"]::-webkit-search-results-decoration {
        -webkit-appearance: none;
        -moz-appearance: none;
      }
      input[type="search"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
      }
      textarea {
        overflow: auto;
        vertical-align: top;
        resize: vertical;
      }
      audio,
      canvas,
      video {
        display: inline-block;
        max-width: 100%;
      }
form  input[type="checkbox"]{
      display: inline;
      width: auto;
}
      audio:not([controls]) {
        display: none;
        height: 0;
      }
      [hidden] {
        display: none;
      }
      a:focus {
        outline: thin dotted;
      }
      a:active,
      a:hover {
        outline: 0;
      }
      img {
        border: 0;
        -ms-interpolation-mode: bicubic;
      }
      figure {
        margin: 0;
      }
      form {
        margin: 0;
      }
      fieldset {
        border: 1px solid silver;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
      }
      legend {
        border: 0;
        padding: 0;
        white-space: normal;
      }
      button,
      input,
      select,
      textarea {
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
      }
      button,
      input {
        line-height: normal;
      }
      button,
      select {
        text-transform: none;
      }
      button,
      html input[type="button"],
      input[type="reset"],
      input[type="submit"] {
        -webkit-appearance: button;
        cursor: pointer;
      }
      button[disabled],
      html input[disabled] {
        cursor: default;
      }
      input[type="checkbox"],
      input[type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }
      input[type="search"] {
        -webkit-appearance: textfield;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }
      input[type="search"]::-webkit-search-cancel-button,
      input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      button::-moz-focus-inner,
      input::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      textarea {
        overflow: auto;
        vertical-align: top;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      button,
      html,
      input,
      select,
      textarea {
        color: #222;
      }
      ::-moz-selection {
        background: #b3d4fc;
        text-shadow: none;
      }
      ::selection {
        background: #b3d4fc;
        text-shadow: none;
      }
      img {
        vertical-align: middle;
      }
      fieldset {
        border: 0;
        margin: 0;
        padding: 0;
      }
      textarea {
        resize: vertical;
      }

            h1,
            h1 a,
            h2,
            h2 a,
            h3,
            h3 a,
            h4,
            h4 a,
            h5,
            h5 a,
            h6,
            h6 a {
              font-family: "Red Hat Display", sans-serif;
              font-weight: bold;
              color: var(--azuloscuro);
              font-size: 2.5rem;
              margin-bottom: 2rem;
              color: #fff;
            }

            footer {
              background-color: #000;
              color: #fff;
            }

@media screen and (max-width: 480px){
      html{
            font-size: 14px;
      }
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Form />
    </>
  );
}

export default App;
