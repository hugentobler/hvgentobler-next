/**
 * POST
 */

/**
 * MODULES
 */
/* Components */
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import Pre from '../../components/Pre';
import Code from '../../components/Code';

/**
 * FRONTMATTER
 * Pass on to layout as props.
 */
const frontmatter = {
  title: ' ',
  description: ' ',
  image: ' ',
  colour: 'default',
};

export default function Page() {
  return (
    /* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location, react/no-unescaped-entities */
    <Layout {...frontmatter}>
      <Post>
        <h1>
          Second-guessing the modern web
        </h1>
        <lede>
          Most websites today are built like commercial products by professionals and marketers, optimised to draw the largest audience, generate engagement and 'convert'. But there is also a smaller, less-visible web designed by regular people to simply to share their interests and hobbies with the world. A web that is unpolished, often quirky but often also fun, creative and interesting.
        </lede>
        <p>
          Yes, you can hook up a Webflow lead gen form to a back-end of your choice easily.
        </p>
        <p>
          You can get:
        </p>
        <ol>
          <li>
            Custom form validation - HTML5 validation is solid but ugly.
          </li>
          <li>
            Contextual form errors before submission - so that users can easily identify what went wrong.
          </li>
        </ol>
        <p>
          And you can do it without:
        </p>
        <ol>
          <li>
            Dependency bloat - no more Vue or Jquery.
          </li>
          <li>
            Styling bloat - by leveraging existing Webflow features and styling.
          </li>
        </ol>
        c
        <wrap>
          <p>
            Let's save the user inputs in one object - <em>data</em>.
          </p>
          <p>
            And the validity of each input in another - <em>valid</em>. Later <em>valid</em> will also help us infer form validity and completeness.
          </p>
          <Pre>{`
              let data = {},
                valid = {}
            `}</Pre>
        </wrap>
        <wrap>
          <p>
            When users interact with our form, we will want to update our objects <em>data</em> and <em>valid</em>.
          </p>
          <p>
            Setting key/values directly makes debugging and logging changes difficult. Instead, we'll setup <em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noreferrer">Proxies</a></em> with set <em>traps</em> to manage state.
          </p>
          <p>
            In practice, that means replacing <Code>data.name = 'Christopher'</Code> with <Code>dataChange.name = 'Christopher'</Code>.
          </p>
          <Pre>{`
          const dataChange = new Proxy(data, {
            set: (target, key, value) => {
              key = key.toLowerCase(); value = value.toLowerCase()
              // console.log(\`\${key} set to \${value}\`)
              target[key] = value
              return true
            }
          })

          const validChange = new Proxy(valid, {
            set: (target, key, value) => {
              // console.log(\`\${key} set to \${value}\`)
              target[key] = value
              return true
            }
          })
          `}</Pre>
        </wrap>
        <p>
          We'll need a reference to our Dom elements - one form and several inputs.
        </p>
        <p>The submit button is an input of type <em>submit</em>, so filtering it from <em>inputs</em> leaves us with <em>fields</em>.
        </p>
        <h2>
          Managing form data and validity
        </h2>
        <p>
          We'll need a reference to our Dom elements - one form and several inputs.
        </p>
        <p>The submit button is an input of type <em>submit</em>, so filtering it from <em>inputs</em> leaves us with <em>fields</em>.
        </p>
      </Post>
    </Layout>
  );
}
