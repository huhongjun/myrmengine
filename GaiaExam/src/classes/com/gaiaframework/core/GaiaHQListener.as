﻿/*****************************************************************************************************
* Gaia Framework for Adobe Flash ©2007-2008
* Written by: Steven Sacks
* email: stevensacks@gmail.com
* blog: http://www.stevensacks.net/
* forum: http://www.gaiaflashframework.com/forum/
* wiki: http://www.gaiaflashframework.com/wiki/
* 
* By using the Gaia Framework, you agree to keep the above contact information in the source code.
* 
* Gaia Framework for Adobe Flash is (c) 2007-2008 Steven Sacks and is released under the MIT License:
* http://www.opensource.org/licenses/mit-license.php 
*****************************************************************************************************/

package com.gaiaframework.core
{
	import flash.events.EventDispatcher;
	import flash.events.Event;
	
	public class GaiaHQListener extends EventDispatcher
	{
		public var event:String;
		public var target:Function;
		public var hijack:Boolean;
		public var onlyOnce:Boolean;
		public var completed:Boolean;
		public var dispatched:Boolean;
		
		function GaiaHQListener()
		{
			super();
		}
		public function completeCallback(destroy:Boolean = false):void
		{
			completed = true;
			if (destroy) onlyOnce = true;
			dispatchEvent(new Event(Event.COMPLETE));
		}
	}
}