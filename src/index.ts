import { loadConfig, loadDotenv, watchConfig } from 'c12'

(
  async () => {
    const config = await loadConfig({
      name: 'wu',
      globalRc: true,
      packageJson: true,
      dotenv: true,
      defaults: {
        name: 'defaults',
        defaultKey: 'defaultValue',
      },
    })

    console.log(config)

    const env = await loadDotenv({
      cwd: '.',
      fileName: '.env',
    })

    console.log(env)
  }
)()

// (
//   async () => {
//     const config = await watchConfig({
//       cwd: '.',
//       name: 'wu',
//       onWatch: (event) => {
//         console.log('[watcher]', event.type, event.path)
//       },
//       acceptHMR({ oldConfig, newConfig, getDiff }) {
//         const diff = getDiff()
//         if (diff.length === 0) {
//           console.log('No config changed detected!')
//           return true // No changes!
//         }
//       },
//       onUpdate({ oldConfig, newConfig, getDiff }) {
//         const diff = getDiff()
//         console.log(`Config updated:\n${diff.map(i => i.toJSON()).join('\n')}`)
//       },
//     })

//     console.log(config)
//   },
// )()
