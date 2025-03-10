export class Timer {
  currentTime = 0
  private startTime?: number
  private stopTime?: number
  private intervalId?: number

  start(): void {
    this.startTime = new Date().getTime()
    this.intervalId = window.setInterval(() => {
      this.currentTime += 100
    }, 100)
  }

  stop(): void {
    this.stopTime = new Date().getTime()
    window.clearInterval(this.intervalId)
    this.currentTime = this.stopTime - this.startTime
  }
}
