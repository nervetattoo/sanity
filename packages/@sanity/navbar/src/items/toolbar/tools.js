import toolConfigs from 'all:part:@sanity/base/tool'

const tools = toolConfigs.map(toolConfig => {
  // console.log(toolConfig)
  return {
    name: toolConfig.name,
    label: toolConfig.title,
    icon: toolConfig.icon
  }
})

export default tools
