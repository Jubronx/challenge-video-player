import { mount } from '@vue/test-utils'
import ContentPlayer from '../../components/ContentPlayer/ContentPlayer.vue';
import { PhThumbsUp } from '@phosphor-icons/vue'

describe('ContentPlayer.vue', () => {
  const contentVideo = {
    title: 'Sample Video',
    type: 'video',
    url: 'http://example.com/video.mp4',
    description: 'A sample video',
    total_likes: 10
  }

  const contentImage = {
    title: 'Sample Image',
    type: 'image',
    url: 'http://example.com/image.jpg',
    description: 'A sample image',
    total_likes: 5
  }

  const contentPdf = {
    title: 'Sample PDF',
    type: 'pdf',
    url: 'http://example.com/document.pdf',
    description: 'A sample PDF document',
    total_likes: 3
  }

  const contentLink = {
    title: 'Sample Link',
    type: 'link',
    url: 'http://example.com',
    description: 'A sample link',
    total_likes: 8
  }

  it('renders video content correctly', () => {
    const wrapper = mount(ContentPlayer, {
      props: { contentSelected: contentVideo }
    })
    expect(wrapper.find('video').exists()).toBe(true)
    expect(wrapper.find('video').attributes('src')).toBe(contentVideo.url)
  })

  it('renders image content correctly', () => {
    const wrapper = mount(ContentPlayer, {
      props: { contentSelected: contentImage }
    })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(contentImage.url)
    expect(wrapper.find('img').attributes('alt')).toBe(contentImage.title)
  })

  it('renders pdf content correctly', () => {
    const wrapper = mount(ContentPlayer, {
      props: { contentSelected: contentPdf }
    })
    expect(wrapper.find('iframe').exists()).toBe(true)
    expect(wrapper.find('iframe').attributes('src')).toBe(contentPdf.url)
  })

  it('renders link content correctly', () => {
    const wrapper = mount(ContentPlayer, {
      props: { contentSelected: contentLink }
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe(contentLink.url)
    expect(wrapper.find('a').text()).toBe(contentLink.description)
  })

  it('renders likes correctly', () => {
    const wrapper = mount(ContentPlayer, {
      props: { contentSelected: contentVideo }
    })
    expect(wrapper.findComponent(PhThumbsUp).exists()).toBe(true)
    expect(wrapper.text()).toContain(contentVideo.total_likes)
  })
})