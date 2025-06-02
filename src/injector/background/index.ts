// @ts-check
import ytsdk from 'index.js';

/**
 * @type {typeof import('index.js').default}
 */
const sdk: typeof import('index.js').default = ytsdk;

chrome.runtime.onInstalled.addListener(() => {
  console.log('YT-SDK Extension installed');
});