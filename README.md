## Classes

<dl>
<dt><a href="#AspectRatioCalculator">AspectRatioCalculator</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getAbsoluteDistance">getAbsoluteDistance(itemB, itemA)</a> ⇒ <code>number</code></dt>
<dd><p>Gets absolute distances</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#BBox">BBox</a> : <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
</dl>

<a name="AspectRatioCalculator"></a>

## AspectRatioCalculator

**Kind**: global class

- [AspectRatioCalculator](#AspectRatioCalculator)
  - [new AspectRatioCalculator()](#new_AspectRatioCalculator_new)
  - _instance_
    - [.bbox](#AspectRatioCalculator+bbox) : [<code>BBox</code>](#BBox)
    - [.aspectRatio](#AspectRatioCalculator+aspectRatio) : <code>number</code>
    - [.getHeight(width)](#AspectRatioCalculator+getHeight) ⇒ <code>number</code>
    - [.getWidth(height)](#AspectRatioCalculator+getWidth) ⇒ <code>number</code>
  - _static_
    - [.AspectRatioCalculator](#AspectRatioCalculator.AspectRatioCalculator)
      - [new AspectRatioCalculator(bbox)](#new_AspectRatioCalculator.AspectRatioCalculator_new)

<a name="new_AspectRatioCalculator_new"></a>

### new AspectRatioCalculator()

AspectRatioCalculator class

<a name="AspectRatioCalculator+bbox"></a>

### aspectRatioCalculator.bbox : [<code>BBox</code>](#BBox)

The input BBox

**Kind**: instance property of [<code>AspectRatioCalculator</code>](#AspectRatioCalculator)  
<a name="AspectRatioCalculator+aspectRatio"></a>

### aspectRatioCalculator.aspectRatio : <code>number</code>

BBox's aspect ratio

**Kind**: instance property of [<code>AspectRatioCalculator</code>](#AspectRatioCalculator)  
<a name="AspectRatioCalculator+getHeight"></a>

### aspectRatioCalculator.getHeight(width) ⇒ <code>number</code>

Gets height from width

**Kind**: instance method of [<code>AspectRatioCalculator</code>](#AspectRatioCalculator)

| Param | Type                |
| ----- | ------------------- |
| width | <code>number</code> |

<a name="AspectRatioCalculator+getWidth"></a>

### aspectRatioCalculator.getWidth(height) ⇒ <code>number</code>

Gets height from height

**Kind**: instance method of [<code>AspectRatioCalculator</code>](#AspectRatioCalculator)

| Param  | Type                |
| ------ | ------------------- |
| height | <code>number</code> |

<a name="AspectRatioCalculator.AspectRatioCalculator"></a>

### AspectRatioCalculator.AspectRatioCalculator

**Kind**: static class of [<code>AspectRatioCalculator</code>](#AspectRatioCalculator)  
<a name="new_AspectRatioCalculator.AspectRatioCalculator_new"></a>

#### new AspectRatioCalculator(bbox)

Creates an instance of AspectRatioCalculator.

| Param | Type                       |
| ----- | -------------------------- |
| bbox  | [<code>BBox</code>](#BBox) |

<a name="getAbsoluteDistance"></a>

## getAbsoluteDistance(itemB, itemA) ⇒ <code>number</code>

Gets absolute distances

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| itemB | <code>number</code> |
| itemA | <code>number</code> |

<a name="BBox"></a>

## BBox : <code>Array.&lt;number&gt;</code>

**Kind**: global typedef
