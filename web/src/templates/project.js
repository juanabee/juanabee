import React from 'react'
import {graphql} from 'gatsby'


export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`

const ProjectTemplate = props => {
  const {data, errors} = props
  const project = data && data.project
  return (
   <div>qweqe</div>
  )
}

export default ProjectTemplate
