import Document, { Head, Main, NextScript, Html } from 'next/document';
import { StyleSheetServer } from 'aphrodite';

if (typeof window === 'undefined') {
  global.window = {};
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { html, css } = StyleSheetServer.renderStatic(() => ctx.renderPage());
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...html, css };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <style dangerouslySetInnerHTML={{ __html: this.props.css.content }} data-aphrodite="" />
        </Head>
        <body>
          <div id="modal" />
          <div id="notifications" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
