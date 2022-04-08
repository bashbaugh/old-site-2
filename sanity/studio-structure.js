import S from "@sanity/desk-tool/structure-builder"

const singletons = [
  ['homePage', 'Home'],
  ['morePage', 'More'],
  ['hirePage', 'Hire'],
]

const structure =  () =>
  S.list()
    .title("Content")
    .items([
        ...singletons.map(i => S.listItem()
        .title(i[1])
        .child(
          S.editor()
            .id(i[0])
            .schemaType(i[0])
            .documentId(`singleton-${i[0]}`)
        )),
        ...S.documentTypeListItems().filter(listItem => !singletons.map(i => i[0]).includes(listItem.getId()))
    ])

export default structure
