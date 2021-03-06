## Classes

<dl>
<dt><a href="#Prompt">Prompt</a></dt>
<dd></dd>
<dt><a href="#Prompt">Prompt</a></dt>
<dd></dd>
</dl>

<a name="Prompt"></a>

## Prompt
**Kind**: global class  
**Author**: VoidNull  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userID | <code>String</code> | The user ID that is bound to the current prompt |
| channel | <code>Channel</code> | The channel where the prompt is running |
| timedOut | <code>Boolean</code> | Whether the Prompt timed out |
| ended | <code>Boolean</code> | Whether the Prompt ended |


* [Prompt](#Prompt)
    * [new Prompt()](#new_Prompt_new)
    * [new Prompt(client, uID, channel, [defaultOptions])](#new_Prompt_new)
    * [.userID](#Prompt+userID) : <code>String</code>
    * [.channel](#Prompt+channel) : <code>Channel</code>
    * [._options](#Prompt+_options) : <code>Object</code>
    * [._actualOptions](#Prompt+_actualOptions) : <code>Object</code>
    * [.timedOut](#Prompt+timedOut)
    * [.ended](#Prompt+ended)
    * [._boundEvent](#Prompt+_boundEvent)
    * [.axon](#Prompt+axon) : <code>AxonClient</code>
    * [.client](#Prompt+client) : <code>BotClient</code>
    * [.run(prompt, [options])](#Prompt+run) ⇒ <code>Promise.&lt;Message&gt;</code>
    * [._checker(msg)](#Prompt+_checker) ⇒
    * [._onEnded(msg)](#Prompt+_onEnded)
    * [._onMsgCreate(msg)](#Prompt+_onMsgCreate)

<a name="new_Prompt_new"></a>

### new Prompt()
Create a Prompt, waiting for specific input before resolving with the message Object

**Example**  
```js
let prompt = new Prompt(this.axon, msg.author.id, msg.channel, { timeoutMessage: 'Be quicker next time' });
```
<a name="new_Prompt_new"></a>

### new Prompt(client, uID, channel, [defaultOptions])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| client | <code>[AxonClient](AxonClient)</code> |  | The Axon client |
| uID | <code>String</code> |  | The user ID |
| channel | <code>Channel</code> |  | The channel object |
| [defaultOptions] | <code>Object</code> | <code>{}</code> | The default options for the prompt. |
| [defaultOptions.allowed] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | An array of strings allow to pass as the prompt |
| [defaultOptions.wildcard] | <code>Boolean</code> | <code>false</code> | Whether or not the message content can contain allowed or must match allowed. |
| [defaultOptions.caseSensitive] | <code>Boolean</code> | <code>true</code> | Makes it so the prompt is case insensitive, returns the message lowercase content. |
| [defaultOptions.deletePrompt] | <code>Boolean</code> | <code>true</code> | Whether or not you want the prompt to be deleted |
| [defaultOptions.sendInvalid] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when invalid |
| [defaultOptions.invalidMessage] | <code>String</code> | <code>&#x27;Invalid Message!&#x27;</code> | The message to send when a prompt is invalid |
| [defaultOptions.deleteInvalidMessage] | <code>Number</code> \| <code>Boolean</code> | <code>false</code> | The time in milliseconds to wait before deleting the invalid message |
| [defaultOptions.timeout] | <code>Number</code> | <code>10000</code> | The time to wait for the prompt to timeout |
| [defaultOptions.sendTimeout] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when timeout |
| [defaultOptions.timeoutMessage] | <code>String</code> | <code>&#x27;Prompt timed out!&#x27;</code> | The message to send when the prompt times out. |
| [defaultOptions.deleteTimeoutMsg] | <code>Number</code> | <code>false</code> | The time to wait in milliseconds before deleting the timeout message |
| [defaultOptions.resendWhenInvalid] | <code>Boolean</code> | <code>false</code> | Whether or not to resend when the prompt got a invalid returned message, does not send invalid message |

<a name="Prompt+userID"></a>

### prompt.userID : <code>String</code>
The user ID that is bound to the current prompt

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+channel"></a>

### prompt.channel : <code>Channel</code>
The channel where the prompt is running

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+_options"></a>

### prompt.\_options : <code>Object</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+_actualOptions"></a>

### prompt.\_actualOptions : <code>Object</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+timedOut"></a>

### prompt.timedOut
Whether the Prompt timed out

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+ended"></a>

### prompt.ended
Whether the prompt ended

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+_boundEvent"></a>

### prompt.\_boundEvent
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+axon"></a>

### prompt.axon : <code>AxonClient</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
**Read only**: true  
<a name="Prompt+client"></a>

### prompt.client : <code>BotClient</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
**Read only**: true  
<a name="Prompt+run"></a>

### prompt.run(prompt, [options]) ⇒ <code>Promise.&lt;Message&gt;</code>
Runs the prompt.

**Kind**: instance method of [<code>Prompt</code>](#Prompt)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - The message object, or a reject error if timed out or message was invalid  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| prompt | <code>String</code> |  | The prompt you would like to send |
| [options] | <code>Object</code> | <code>{}</code> | The options for the prompt. |
| [options.allowed] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | A array of strings allow to pass as the prompt |
| [options.wildcard] | <code>Boolean</code> | <code>false</code> | Whether or not the message content can contain allowed or must match allowed. |
| [options.caseSensitive] | <code>Boolean</code> | <code>true</code> | Makes it so the prompt is case insensitive, returns the message lowercase content. |
| [options.deletePrompt] | <code>Boolean</code> | <code>true</code> | Whether or not you want the prompt to be deleted |
| [defaultOptions.sendInvalid] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when invalid |
| [options.invalidMessage] | <code>String</code> | <code>&#x27;Invalid Message!&#x27;</code> | The message to send when a prompt is invalid |
| [options.deleteInvalidMessage] | <code>Number</code> | <code>false</code> | The time in milliseconds to wait before deleting the invalid message |
| [options.timeoutTime] | <code>Number</code> | <code>10000</code> | The time to wait for the prompt to timeout |
| [defaultOptions.sendTimeout] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when timeout |
| [options.timeoutMessage] | <code>String</code> | <code>&#x27;Prompt timed out!&#x27;</code> | The message to send when the prompt times out. |
| [options.deleteTimeoutMsg] | <code>Number</code> | <code>false</code> | The time to wait in milliseconds before deleting the timeout message |
| [options.resendWhenInvalid] | <code>Boolean</code> | <code>false</code> | Whether or not to resend when the prompt got a invalid returned message, does not send invalid message |

**Example**  
```js
const output = await prompt.run('Who would you like to wave to?', { timeout: 10000 });
this.sendMessage(msg.channel, output.content);
```
<a name="Prompt+_checker"></a>

### prompt.\_checker(msg) ⇒
Checker for this._onMsgCreate

**Kind**: instance method of [<code>Prompt</code>](#Prompt)  
**Returns**: Whether the check completed successfully  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Message</code> | The message object to check against. |

<a name="Prompt+_onEnded"></a>

### prompt.\_onEnded(msg)
**Kind**: instance method of [<code>Prompt</code>](#Prompt)  

| Param | Type |
| --- | --- |
| msg | <code>Message</code> | 

<a name="Prompt+_onMsgCreate"></a>

### prompt.\_onMsgCreate(msg)
Message event for prompt
When a message is created

**Kind**: instance method of [<code>Prompt</code>](#Prompt)  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Message</code> | The message object |

<a name="Prompt"></a>

## Prompt
**Kind**: global class  

* [Prompt](#Prompt)
    * [new Prompt()](#new_Prompt_new)
    * [new Prompt(client, uID, channel, [defaultOptions])](#new_Prompt_new)
    * [.userID](#Prompt+userID) : <code>String</code>
    * [.channel](#Prompt+channel) : <code>Channel</code>
    * [._options](#Prompt+_options) : <code>Object</code>
    * [._actualOptions](#Prompt+_actualOptions) : <code>Object</code>
    * [.timedOut](#Prompt+timedOut)
    * [.ended](#Prompt+ended)
    * [._boundEvent](#Prompt+_boundEvent)
    * [.axon](#Prompt+axon) : <code>AxonClient</code>
    * [.client](#Prompt+client) : <code>BotClient</code>
    * [.run(prompt, [options])](#Prompt+run) ⇒ <code>Promise.&lt;Message&gt;</code>
    * [._checker(msg)](#Prompt+_checker) ⇒
    * [._onEnded(msg)](#Prompt+_onEnded)
    * [._onMsgCreate(msg)](#Prompt+_onMsgCreate)

<a name="new_Prompt_new"></a>

### new Prompt()
Create a Prompt, waiting for specific input before resolving with the message Object

**Example**  
```js
let prompt = new Prompt(this.axon, msg.author.id, msg.channel, { timeoutMessage: 'Be quicker next time' });
```
<a name="new_Prompt_new"></a>

### new Prompt(client, uID, channel, [defaultOptions])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| client | <code>[AxonClient](AxonClient)</code> |  | The Axon client |
| uID | <code>String</code> |  | The user ID |
| channel | <code>Channel</code> |  | The channel object |
| [defaultOptions] | <code>Object</code> | <code>{}</code> | The default options for the prompt. |
| [defaultOptions.allowed] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | An array of strings allow to pass as the prompt |
| [defaultOptions.wildcard] | <code>Boolean</code> | <code>false</code> | Whether or not the message content can contain allowed or must match allowed. |
| [defaultOptions.caseSensitive] | <code>Boolean</code> | <code>true</code> | Makes it so the prompt is case insensitive, returns the message lowercase content. |
| [defaultOptions.deletePrompt] | <code>Boolean</code> | <code>true</code> | Whether or not you want the prompt to be deleted |
| [defaultOptions.sendInvalid] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when invalid |
| [defaultOptions.invalidMessage] | <code>String</code> | <code>&#x27;Invalid Message!&#x27;</code> | The message to send when a prompt is invalid |
| [defaultOptions.deleteInvalidMessage] | <code>Number</code> \| <code>Boolean</code> | <code>false</code> | The time in milliseconds to wait before deleting the invalid message |
| [defaultOptions.timeout] | <code>Number</code> | <code>10000</code> | The time to wait for the prompt to timeout |
| [defaultOptions.sendTimeout] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when timeout |
| [defaultOptions.timeoutMessage] | <code>String</code> | <code>&#x27;Prompt timed out!&#x27;</code> | The message to send when the prompt times out. |
| [defaultOptions.deleteTimeoutMsg] | <code>Number</code> | <code>false</code> | The time to wait in milliseconds before deleting the timeout message |
| [defaultOptions.resendWhenInvalid] | <code>Boolean</code> | <code>false</code> | Whether or not to resend when the prompt got a invalid returned message, does not send invalid message |

<a name="Prompt+userID"></a>

### prompt.userID : <code>String</code>
The user ID that is bound to the current prompt

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+channel"></a>

### prompt.channel : <code>Channel</code>
The channel where the prompt is running

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+_options"></a>

### prompt.\_options : <code>Object</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+_actualOptions"></a>

### prompt.\_actualOptions : <code>Object</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+timedOut"></a>

### prompt.timedOut
Whether the Prompt timed out

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+ended"></a>

### prompt.ended
Whether the prompt ended

**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+_boundEvent"></a>

### prompt.\_boundEvent
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
<a name="Prompt+axon"></a>

### prompt.axon : <code>AxonClient</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
**Read only**: true  
<a name="Prompt+client"></a>

### prompt.client : <code>BotClient</code>
**Kind**: instance property of [<code>Prompt</code>](#Prompt)  
**Read only**: true  
<a name="Prompt+run"></a>

### prompt.run(prompt, [options]) ⇒ <code>Promise.&lt;Message&gt;</code>
Runs the prompt.

**Kind**: instance method of [<code>Prompt</code>](#Prompt)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - The message object, or a reject error if timed out or message was invalid  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| prompt | <code>String</code> |  | The prompt you would like to send |
| [options] | <code>Object</code> | <code>{}</code> | The options for the prompt. |
| [options.allowed] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | A array of strings allow to pass as the prompt |
| [options.wildcard] | <code>Boolean</code> | <code>false</code> | Whether or not the message content can contain allowed or must match allowed. |
| [options.caseSensitive] | <code>Boolean</code> | <code>true</code> | Makes it so the prompt is case insensitive, returns the message lowercase content. |
| [options.deletePrompt] | <code>Boolean</code> | <code>true</code> | Whether or not you want the prompt to be deleted |
| [defaultOptions.sendInvalid] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when invalid |
| [options.invalidMessage] | <code>String</code> | <code>&#x27;Invalid Message!&#x27;</code> | The message to send when a prompt is invalid |
| [options.deleteInvalidMessage] | <code>Number</code> | <code>false</code> | The time in milliseconds to wait before deleting the invalid message |
| [options.timeoutTime] | <code>Number</code> | <code>10000</code> | The time to wait for the prompt to timeout |
| [defaultOptions.sendTimeout] | <code>Boolean</code> | <code>true</code> | Whether or not you want a message to be sent when timeout |
| [options.timeoutMessage] | <code>String</code> | <code>&#x27;Prompt timed out!&#x27;</code> | The message to send when the prompt times out. |
| [options.deleteTimeoutMsg] | <code>Number</code> | <code>false</code> | The time to wait in milliseconds before deleting the timeout message |
| [options.resendWhenInvalid] | <code>Boolean</code> | <code>false</code> | Whether or not to resend when the prompt got a invalid returned message, does not send invalid message |

**Example**  
```js
const output = await prompt.run('Who would you like to wave to?', { timeout: 10000 });
this.sendMessage(msg.channel, output.content);
```
<a name="Prompt+_checker"></a>

### prompt.\_checker(msg) ⇒
Checker for this._onMsgCreate

**Kind**: instance method of [<code>Prompt</code>](#Prompt)  
**Returns**: Whether the check completed successfully  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Message</code> | The message object to check against. |

<a name="Prompt+_onEnded"></a>

### prompt.\_onEnded(msg)
**Kind**: instance method of [<code>Prompt</code>](#Prompt)  

| Param | Type |
| --- | --- |
| msg | <code>Message</code> | 

<a name="Prompt+_onMsgCreate"></a>

### prompt.\_onMsgCreate(msg)
Message event for prompt
When a message is created

**Kind**: instance method of [<code>Prompt</code>](#Prompt)  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Message</code> | The message object |

