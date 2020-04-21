export const MACOS = 'mac';
export const WINDOWS = 'windows';

declare const process;
declare const window;

export class OsUtils {
  static os() {
    // explicitly set these to avoid issues
    const w = window || null;
    const n = navigator || null;
    const p = (w && w.process) || null;

    // via node
    if (p && p.platform) {
      if (p.platform === 'darwin') {
        return MACOS;
      }
      if (p.platform.includes('win')) {
        return WINDOWS;
      }
    }

    // via user agent
    if (n && n.userAgent) {
      if (n.userAgent.includes('Macintosh')) {
        return MACOS;
      }
      if (n.userAgent.includes('Windows')) {
        return WINDOWS;
      }
    }

    // default to macOs
    return MACOS;
  }
}
