import { tableMenuOffsetPx } from './tableConstants'

export enum TableViewportVerticalState {
  BelowViewport = 'below viewport',
  OnlyTopInViewport = 'only top in viewport',
  Visible = 'visible',
  OnlyBottomInViewport = 'only bottom in viewport',
  AboveViewport = 'above viewport',
}

const getVertical = (
  tableContainer: HTMLElement
): TableViewportVerticalState => {
  const { top, bottom } = tableContainer.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const theadHeight = tableContainer.querySelector('thead').clientHeight
  const caption = tableContainer.querySelector('caption')
  const captionHeight = caption ? caption.clientHeight : 0

  const topAbovePage = top <= 0
  const topBelowPage = top >= viewportHeight
  const bottomAbovePage = bottom <= 0
  const bottomBelowPage = bottom >= viewportHeight

  if (topBelowPage) return TableViewportVerticalState.BelowViewport
  if (bottomAbovePage) return TableViewportVerticalState.AboveViewport

  const getViewportTableHeight = (): number => {
    if (topAbovePage && bottomBelowPage) return viewportHeight
    if (topAbovePage && !bottomBelowPage) return bottom
    if (!topAbovePage && bottomBelowPage) return viewportHeight - top
    return bottom - top
  }
  const viewportTableHeight = getViewportTableHeight()
  const onlyTopInViewport =
    bottomBelowPage &&
    viewportTableHeight <= theadHeight + captionHeight + tableMenuOffsetPx
  if (onlyTopInViewport) return TableViewportVerticalState.OnlyTopInViewport

  const onlyBottomInViewport =
    topAbovePage && viewportTableHeight <= theadHeight + tableMenuOffsetPx
  if (onlyBottomInViewport)
    return TableViewportVerticalState.OnlyBottomInViewport

  return TableViewportVerticalState.Visible
}

export enum TableViewportHorizontalState {
  SmallerThanViewport = 'smaller than viewport',
  NotSmallerThanViewport = 'not smaller than viewport',
}

const getHorizontal = (
  tableContainer: HTMLElement
): TableViewportHorizontalState => {
  const tableElement = tableContainer.querySelector('table')
  const { left, right } = tableElement.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const isSmallerThanViewport = right - left < viewportWidth

  if (isSmallerThanViewport)
    return TableViewportHorizontalState.SmallerThanViewport
  return TableViewportHorizontalState.NotSmallerThanViewport
}

export interface TableViewportState {
  vertical: TableViewportVerticalState
  horizontal: TableViewportHorizontalState
}

export const getTableViewportState = (
  tableContainer: HTMLElement
): TableViewportState => {
  const vertical = getVertical(tableContainer)
  const horizontal = getHorizontal(tableContainer)
  return { vertical, horizontal }
}
